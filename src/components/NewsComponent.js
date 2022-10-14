import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
  NavDropdown,
  Offcanvas,
  Row,
  Col,
  Image,
  Spinner,
} from "react-bootstrap";

export default function NewsComponent({dataFetched, apiData}) {
  const MapData = () => {
    console.log(apiData);
    return apiData
      .filter((item) => apiData.indexOf(item) > 4)
      .filter((item) => item.multimedia !== null)
      .map((item, index) => (
        <Col md={4} lg={3} className="py-4 px-2 mx-0" key={index}>
          <Image
            className="center-cropped"
            src={item.multimedia[0].url}></Image>
          <a href={item.url}>
            <div className="px-3 pt-3">
              <h6 className="text-success">{item.section}</h6>
              <h5>{item.title}</h5>
              <h6>{item.abstract}</h6>
            </div>
          </a>
        </Col>
      ));
  };
  const RenderApiData = () => {
    if (dataFetched) {
      return (
        <div className="mt-5">
          <Container>
            <hr />
            <h5 className="pt-2">More News</h5>
            <Row>
              <MapData />
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <>
          {/* <div className="loader-container pt-5">
                        <Spinner
                            animation="border"
                            role="status"
                            className="loader"
                            variant="info"></Spinner>
                    </div> */}
        </>
      );
    }
  };
  return (
    <>
      <RenderApiData />
    </>
  );
}
