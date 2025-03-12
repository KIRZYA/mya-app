import React from "react";
import Bookdata from "./bookset.json";
import { Container, Typography, Card, CardContent, Divider } from "@mui/material";

const BookList = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom align="center">
                Book List
            </Typography>
            {Bookdata.map((book) => (
                <div key={book.id}>
                    <Card
                        sx={{
                            marginBottom: 2,
                            '&:hover': {
                                backgroundColor: '#f0f0f0', // Цвет фона при наведении
                                cursor: 'pointer', // Курсор при наведении
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" component="h2" gutterBottom>
                                {book.book_name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Author: {book.author}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Divider />
                </div>
            ))}
        </Container>
    );
};

export default BookList;