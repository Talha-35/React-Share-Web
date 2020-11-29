import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, capitalize } from "@material-ui/core";
import { fetchData } from "../helper/FetchData";
import Typography from "@material-ui/core/Typography";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));

function UserDetail() {
  const { id } = useParams();
  const mainStyles = stylesFunc();

  const [userDetails, setUserDetail] = useState();
  useEffect(() => {
    fetchData(`/user/${id}`)
      .then((res) => setUserDetail(res))
      .catch()
      .finally();
  }, [id]);

  return (
    <Container className={mainStyles.wrapper}>
      <img src={userDetails?.picture} alt="user" />
      <Typography variant="h4">{userDetails?.firstName}</Typography>
      <Typography variant="h4">{userDetails?.lastName}</Typography>
      {/* {userDetail?.registerDate && (
        <Typography variant="h4">
          {
            TODO: move to helper
          }
          {formatDate(parseISO(userDetail.registerDate), "MMM/dd/yy")}
        </Typography>
      )} */}
      <Typography variant="h4">{userDetails?.phone}</Typography>
    </Container>
  );
}

export default UserDetail;