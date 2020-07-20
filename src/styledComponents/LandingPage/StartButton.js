import styled from "styled-components";

export default styled.div`
  & a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(0, 129, 255, 0.6);
    font-size: 4rem;
    padding: 10px 30px 20px 30px;
    transition: box-shadow 0.3s ease-in-out;

    :hover {
      box-shadow: 0px 0px 5px rgb(250, 250, 250);
    }
  }
`;
