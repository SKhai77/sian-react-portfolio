import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <main>
      <section>
        <Container>
          <div className="resume">
            <h2>Resume</h2>
            <p>
              <a
                href="./assets/resume/Sian_Full_Stack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-download" style={{ padding: "5px" }}></i>
                Resume
              </a>{" "}
              |
              <a
                href="https://www.credly.com/badges/481c9f18-9732-478e-98bf-423d1d4e94b7/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-link" style={{ padding: "5px" }}></i>
                Full Stack Certificate
              </a>
              |
              <a
                href="https://courses.edx.org/certificates/ecacdb998fe1464eae84908c24904361"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-link" style={{ padding: "5px" }}></i>
                AI Applications and Prompt Engineering Certificate
              </a>
            </p>
            <Row>
              <Col>
                <h3 className="mt-3">Front-end Proficiencies</h3>
                <ul className="list-group">
                  <li>Responsive Design</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </Col>

              <Col>
                <h3 className="mt-3">Back-end Proficiencies</h3>
                <ul className="list-group">
                  <li>MongoDB, Mongoose</li>
                  <li>MySQL Sequelize</li>
                  <li>GraphQL</li>
                  <li>Express</li>
                  <li>APIs</li>
                  <li>Node</li>
                  <li>REST</li>
                </ul>
              </Col>

              <Col>
                <h3 className="mt-3">AI Applications and Prompt Engineering</h3>
                <ul className="list-group">
                  <li>Artificial Intelligence</li>
                  <li>Prompt Engineering</li>
                  <li>OpenAI API</li>
                  <li>LangChain</li>
                  <li>ChatGPT</li>
                  <li>LLMs</li>
                  <li>NLP</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Resume;
