import React from "react";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
//Style
import { Text, Grid, Button } from "../elements/Index";
import styled from "styled-components";
//Icon
import { FaSun, FaSistrix } from "react-icons/fa";
//component Import
import Modal_login from "./Modal_login";

const Header = (props) => {
  const dispatch = useDispatch();

  // const { author } = props;

  // const is_login = false;

  const is_login = useSelector((state) => state.user.is_login);
  const is_local = localStorage.getItem("is_login") ? true : false;
  console.log(is_login);
  // const user_nick = localStorage.getItem("user_nick");

  // const [isLoginMode, setIsLoginMode] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // const onClickModal = () => {
  //   setIsLoginMode(!isLoginMode);
  // };

  return (
    <React.Fragment>
      <Grid is_flex>
        <Container
          onClick={() => {
            history.push("/");
          }}
        >
          <Text size="30px" bold color="#212529" margin="1rem" cursor="pointer">
            velog
          </Text>
        </Container>

        {/* {/* 로그인 후 : 로그인 전 */}
        {is_local ? (
          <React.Fragment>
            <Grid is_end>
              <Button
                bg="#ffffff"
                width="4rem"
                height="3rem"
                border="0px"
                cursor="pointer"
              >
                <Text size="30px" margin="0px">
                  <FaSun />
                </Text>
              </Button>
              <Button
                bg="#ffffff"
                width="4rem"
                height="3rem"
                border="0px"
                cursor="pointer"
              >
                <Text size="30px" margin="0px">
                  <FaSistrix />
                </Text>
              </Button>
            </Grid>
            <Button
              margin="1rem"
              padding="0 1rem 0 1.5rem"
              width="8rem"
              height="2rem"
              Text="새글작성"
              _onClick={() => history.push("/write")}
              bg="#212529"
              borderRadius="1rem"
              cursor="pointer"
            >
              <Text center size="1rem" bold color="#ffffff" margin="0px 0px">
                새글작성
              </Text>
            </Button>
            <Button
              margin="1rem"
              padding="0 1rem 0 1.5rem"
              width="8rem"
              height="2rem"
              Text="로그아웃"
              _onClick={() => dispatch(userActions.logoutDB())}
              bg="#212529"
              borderRadius="1rem"
              cursor="pointer"
            >
              <Text center size="1rem" bold color="#ffffff" margin="0px 0px">
                로그아웃
              </Text>
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid is_end>
              <Button
                bg="#ffffff"
                width="4rem"
                height="3rem"
                border="0px"
                cursor="pointer"
              >
                <Text size="30px" margin="0px">
                  <FaSun />
                </Text>
              </Button>
              <Button
                bg="#ffffff"
                width="4rem"
                height="3rem"
                border="0px"
                cursor="pointer"
              >
                <Text size="30px" margin="0px">
                  <FaSistrix />
                </Text>
              </Button>
            </Grid>
            <Button
              margin="1rem"
              padding="0 1rem 0 1.5rem"
              width="6.5rem"
              height="2rem"
              Text="로그인"
              _onClick={openModal}
              bg="#212529"
              borderRadius="1rem"
              cursor="pointer"
            >
              <Text center size="1rem" bold color="#ffffff" margin="0px 0px">
                로그인
              </Text>
            </Button>
            <Modal_login open={modalOpen} close={closeModal}></Modal_login>
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
};

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&display=swap");

  Text {
    font-family: "Fira Mono", monospace;
  }
`;

export default Header;
