import React, { useCallback, useEffect } from "react";
import redApi from "../api/redApi";

import { Card, Container, Stack, Typography, Button } from "@mui/material";
import SetupRoomDialog from "../components/SetupRoomDialog";

const Home = () => {
  const [apiResp, setApiRest] = React.useState([]);
  const load = useCallback(async () => {
    try {
      const response = await redApi.get("/testURL");
      //setApiRest([...apiResp, response.data]);
      setApiRest((old) => {
        return [...old, response.data];
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("focus", load);
    return () => {
      window.removeEventListener("focus", load);
    };
  }, [load]);

  return (
    <Container component="main" maxWidth="md">
      <Stack sx={{ mt: 1 }} direction="row" justifyContent={"flex-end"}>
        <SetupRoomDialog values={null} onCloseHandler={load} />
        <Button
          variant="contained"
          onClick={() => {
            setApiRest([]);
          }}
        >
          Clear data
        </Button>
      </Stack>
      <Card sx={{ mt: 5, mb: "20%", bgcolor: "#E7FAFF" }}>
        <Typography variant="h5" m={2}>
          Card component
        </Typography>
        {apiResp.map((item, index) => {
          return (
            <Typography variant="h5" m={2} key={index}>
              {JSON.stringify(item)}
            </Typography>
          );
        })}
      </Card>
    </Container>
  );
};

export default Home;
