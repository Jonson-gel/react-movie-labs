import React, { useEffect, useState } from 'react';
import { getToken, createSession } from '../../api/tmdb-api';
import { Container, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenAndCreateSession = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('request_token');
            if (token) {
                try {
                    const sessionId = await createSession(token);
                    sessionStorage.setItem('sessionId', sessionId);
                    setIsAuthenticated(true);
                    navigate('/');
                } catch (error) {
                    console.error('Error creating session:', error);
                    alert('Failed to create session. Please try again.');
                }
            }
        };
        checkTokenAndCreateSession();
    }, [navigate]);

    const handleGetRequestToken = async () => {
        try {
            const token = await getToken();
            window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${encodeURIComponent(window.location.href)}`;
        } catch (error) {
            console.error('Error generating request token:', error);
        }
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                <h4>Login to TMDB</h4>
            </Typography>
            {!isAuthenticated ? (
                <Button 
                    onClick={handleGetRequestToken} 
                    variant="contained" 
                    color="primary" 
                    style={{ margin: '20px' }}
                >
                    Get Authorization
                </Button>
            ) : (
                <Alert severity="success">Session created successfully!</Alert>
            )}
        </Container>
    );
};

export default LoginForm;
