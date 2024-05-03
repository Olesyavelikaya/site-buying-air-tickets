import { Link, useRouteError } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          height={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography marginBottom={"50px"} fontSize="64px" variant="h2">
            <h2>Упс!</h2> Что-то пошло не так!
            <br />
            <i>
              {(error as { statusText: string }).statusText ||
                (error as Error).message}
            </i>
          </Typography>
          <Link to={"/"}>
            <Button variant="contained">Вернуться на главную</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export { ErrorPage };
