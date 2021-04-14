import styled from "styled-components";
import Nav from "./Nav";

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid grey;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid grey;
  }
`;

export default function Header() {
  return (
    <div>
      <HeaderStyles>
        <div className="bar">
          <Nav />
        </div>
        <div className="sub-bar">
          Search
        </div>
      </HeaderStyles>
    </div>
  );
}
