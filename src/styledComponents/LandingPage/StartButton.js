import styled from "styled-components";

export default styled.div`
  & a {
    color: inherit;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(0, 129, 255, 0.6);
    font-size: 4rem;
    padding: 10px 30px 20px 30px;

    :hover {
      box-shadow: 0px 0px 15px rgb(0, 1, 0.5);
    }
  }
`;
