import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, query, orderBy, getDocs, deleteDoc, doc, signInWithGoogle, signOutUser, auth } from '../firebase.js';
import { TextField, Button, Typography, IconButton, Paper, Box, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { onAuthStateChanged } from 'firebase/auth';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    // Получение комментариев из Firebase
    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
            const querySnapshot = await getDocs(q);
            const commentsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setComments(commentsList);
            setLoading(false);
        };

        fetchComments();
    }, []);

    // Аутентификация с Google
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    // Добавление комментария
    const handleAddComment = async (e) => {
        e.preventDefault();
        if (newComment && user) {
            await addDoc(collection(db, 'comments'), {
                text: newComment,
                author: user.displayName,
                authorId: user.uid, // Сохраняем ID пользователя
                timestamp: new Date(),
            });

            // Очистка поля ввода
            setNewComment('');
        }
    };

    // Удаление комментария
    const handleDeleteComment = async (id, authorId) => {
        if (user && user.uid === authorId) {
            const commentDoc = doc(db, 'comments', id);
            await deleteDoc(commentDoc);

            // Обновление состояния после удаления
            setComments(comments.filter(comment => comment.id !== id));
        } else {
            alert("Вы не можете удалить чужой комментарий.");
        }
    };

    // Вход с Google
    const handleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error(error);
        }
    };

    // Выход
    const handleSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom align="center">Комментарии</Typography>

            {/* Форма добавления комментария */}
            {user ? (
                <Box component="form" onSubmit={handleAddComment} sx={{ marginBottom: 3 }}>
                    <TextField
                        label="Ваш комментарий"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        sx={{ marginBottom: 2 }}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Добавить комментарий
                    </Button>
                </Box>
            ) : (
                <Button variant="contained" onClick={handleSignIn} fullWidth>
                    Войти с Google
                </Button>
            )}

            {/* Отображение списка комментариев */}
            {loading ? (
                <CircularProgress />
            ) : (
                <Box>
                    {comments.map((comment) => (
                        <Paper key={comment.id} sx={{ padding: 2, marginBottom: 2, position: 'relative' }}>
                            <Typography variant="h6" component="div">{comment.author}</Typography>
                            <Typography variant="body1" paragraph>{comment.text}</Typography>

                            {/* Кнопка для удаления комментария */}
                            {user && user.uid === comment.authorId && (
                                <IconButton
                                    onClick={() => handleDeleteComment(comment.id, comment.authorId)}
                                    color="error"
                                    sx={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            )}
                        </Paper>
                    ))}
                </Box>
            )}

            {user && (
                <Button variant="contained" onClick={handleSignOut} fullWidth sx={{ marginTop: 2 }}>
                    Выйти
                </Button>
            )}
        </Box>
    );
};

export default Comments;
