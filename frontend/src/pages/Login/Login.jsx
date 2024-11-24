import { CameraAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>

            <form style={{ width: "100%", marginTop: 2 }}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />

              <Button
                type="submit"
                sx={{
                  marginTop: 2,
                  marginBlock: 1,
                }}
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>

              <Typography sx={{ textAlign: "center", marginTop: 1 }}>
                OR
              </Typography>
              <Button
                onClick={toggleLogin}
                sx={{
                  marginTop: 1,
                }}
                type="submit"
                fullWidth
                color="secondary"
              >
                Signup Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>

            <form style={{ width: "100%", marginTop: 2 }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />
                <IconButton>
                  <>
                    <CameraAlt
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                      }}
                    />
                    {/* <Visuhidden>Upload Image</Visuhidden> */}
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Full Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />

              <Button
                type="submit"
                sx={{
                  marginTop: 2,
                  marginBlock: 1,
                }}
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>

              <Typography sx={{ textAlign: "center", marginTop: 1 }}>
                OR
              </Typography>
              <Button
                onClick={toggleLogin}
                sx={{
                  marginTop: 1,
                }}
                type="submit"
                fullWidth
                color="secondary"
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
