import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by
        <span
          className="badge bg-dark"
          style={{
            margin: 5,
          }}
        >
          Vũ Thanh Lâm
        </span>
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork
            <a
              rel="noopener"
              href="https://github.com/hashirshoaeb"
              aria-label="My GitHub"
              style={{
                margin: 5,
              }}
            >
              here
            </a>
            and make your own version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
