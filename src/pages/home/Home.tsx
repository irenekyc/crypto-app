import { FunctionComponent } from "react";

import { Col, Row, Statistic } from "../../layouts";

const Home: FunctionComponent = () => {
  return (
    <>
      <Row>
        <Col span={{ xs: 6, md: 3 }}>
          <Statistic label="label" value="100%" />
        </Col>
        <Col span={{ xs: 6, md: 3 }}>
          <Statistic label="label" value="100%" />
        </Col>
      </Row>
    </>
  );
};

export default Home;
