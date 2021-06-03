import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import portrait from '../images/portrait.jpg';
import {Card, Accordion, Button} from 'react-bootstrap';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Size
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                      <Card>
                        <Card.Title>4 In Round, 2 Layer</Card.Title>
                          <Card.Subtitle>$25</Card.Subtitle>
                        <Card.Text>Feeds 4-6 people, perfect for Families.</Card.Text>
                      </Card>
                      <Card>
                        <Card.Title>4 In Round, 3 Layer</Card.Title>
                          <Card.Subtitle>$35</Card.Subtitle>
                        <Card.Text>Feeds 5-10 people, tall and skinny.</Card.Text>
                      </Card>
                      <Card>
                        <Card.Title>6 In Round, 2 Layer</Card.Title>
                          <Card.Subtitle>$45</Card.Subtitle>
                        <Card.Text>Feeds 8-12 people.</Card.Text>
                      </Card>
                      <Card>
                      <Card.Title>8 In Round, 2 Layer</Card.Title>
                        <Card.Subtitle>$75</Card.Subtitle>
                      <Card.Text>Feeds 12-15 people.</Card.Text>
                      </Card>
                      <Card>
                      <Card.Title>1/2 Dozen Cupcakes</Card.Title>
                        <Card.Subtitle>$15</Card.Subtitle>
                      <Card.Text>Feeds 6 people.</Card.Text>
                      </Card>
                      <Card>
                      <Card.Title>Dozen Cupcakes
                      </Card.Title>
                        <Card.Subtitle>$30</Card.Subtitle>
                      <Card.Text>Feeds 12 people.</Card.Text>
                      </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Flavor
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Card>
                    <Card.Img></Card.Img>
                    <Card.Title>Vanilla</Card.Title>
                    <Card.Text>Classic, light and fluffy organic Vanilla Cake. Vegan options available. Coconut or Almond Milk Only</Card.Text>
                    <Card.Footer>Insert GF, Org, Veg Icons</Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img></Card.Img>
                    <Card.Title>Chocolate</Card.Title>
                    <Card.Text>Classic, fluffy chocolate cake. Vegan options available. Coconut or Almond Milk Only</Card.Text>
                    <Card.Footer>Insert GF, Org, Veg Icons</Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img></Card.Img>
                    <Card.Title>Paleo Chocolate</Card.Title>
                    <Card.Subtitle>Additional $5</Card.Subtitle>
                    <Card.Text>Dense and Fudgy Chocolate cake made with Nut flours and Coconut milk.</Card.Text>
                    <Card.Footer>Insert GF, Org</Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img></Card.Img>
                    <Card.Title>Red Velvet</Card.Title>
                    <Card.Text>Romantic Red Chocolate Cake made with the traditional Organic Cows Milk or Coconut Milk.</Card.Text>
                    <Card.Footer>Insert GF, Org</Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img></Card.Img>
                    <Card.Title>Vegan Carrot Cake</Card.Title>
                    <Card.Subtitle>Additional $5</Card.Subtitle>
                    <Card.Text>Made with Love Carrot Cake, great for summer parties or a special Vegan option</Card.Text>
                    <Card.Footer>Insert GF, Org, Veg Icons</Card.Footer>
                  </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Frosting
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <Card>
                    <Card.Img></Card.Img>
                    <Card.Title>Classic Buttercream Frosting</Card.Title>
                    <Card.Text>Creamy buttery Coconut or Almond Milk Frosting. Our most popular frosting choice as it is best for fine and detailed decorating.</Card.Text>
                    <Card.Footer>Insert GF, Org</Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img></Card.Img>
                    <Card.Title>Vegan Cream Cheese Frosting</Card.Title>
                    <Card.Subtitle>Additional $3, $5, $8</Card.Subtitle>
                    <Card.Text>Classic Cream Cheese frosting made with Vegan Cream Cheese. Not a good choice for very detailed decorations.</Card.Text>
                    <Card.Footer>Insert GF, Org, Vegan</Card.Footer>
                  </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Theme and Decor
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Card>
                    <Card.Title>Basic Decorations</Card.Title>
                    <Card.Text>Choose your color theme, buttercream roses, balloons, Happy Birthday flag or name written on cake, or other easy themes.</Card.Text>
                  </Card>
                  <Card>
                    <Card.Title>Sugar Paste Flowers</Card.Title>
                    <Card.Subtitle>Additional $2 per flower</Card.Subtitle>
                    <Card.Text>Hand sculpted Flowers of your choosing: Roses, Lillies, Orchids</Card.Text>
                  </Card>
                  <Card>
                    <Card.Title>ButterCream Transfer</Card.Title>
                    <Card.Subtitle>Additional $3</Card.Subtitle>
                    <Card.Text>Take any logo, or simple picture and transfer it to the top of the cake using buttercream frosting only.</Card.Text>
                  </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Natural Dyes and Other Add-ons
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                <Card>
                    <Card.Title>Natural Dye</Card.Title>
                    <Card.Subtitle>Additional $5</Card.Subtitle>
                    <Card.Text>Natural dyes may appear lighter in color and have a subtle flavor depending on the color.</Card.Text>
                </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={portrait} alt="" />
          </span>
          <p>I remember being a small child and my father taking me to the
						grocery store. We would walk by the cake section and I would slow
						down and get on my tip toes to see if there was a lady decorating a
						cake behind the counter of sweets. He would eventually leave me
						there to watch as she piped colorful edges around a birthday cake.
						<br />
						<br />
						Then in high school I was blessed to learn from an amazing cake
						decorator who generously taught me her trade. I worked with her for
						4 years and then went on to other things. I have always loved
						creation and my freedom of expression, I am now choosing the
						sweet life, diving into my creation of Divine Confections.
						<br />
						<br />
						My vision:
						<br />
						<br />
						Eloquently and artistically designed special occasion cakes.
						Everything is Gluten free, options for Paleo, dairy free,  vegan,
						natural dies and made with the love and fire that drives me. I value
						organic, quality ingredients that satisfies the need for a
						delectable treat that doesn't compromise one's health.
            </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/confectionsdivine" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/divineconfections/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
