import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.jpg'
import portrait from '../images/portrait.jpg';
import {Card, Accordion, Button, Carousel} from 'react-bootstrap';


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
          <h2 className="major">Menu</h2>
          <span className="image main">
            <img src="https://res.cloudinary.com/legz444/image/upload/v1613009387/conscious_confections_eom6qk.png" alt="Divine Confections Logo" />
          </span>
          <Accordion>
            <Card bg="dark" variant="white">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Size
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                      <Card bg="dark" bg="dark">
                        <Card.Title className="pb-2">4 In Round, 2 Layer</Card.Title>
                          <Card.Subtitle>$25</Card.Subtitle>
                        <Card.Text>Feeds 4-6 people, perfect for Families.</Card.Text>
                      </Card>
                      <Card bg="dark" bg="dark">
                        <Card.Title className="pb-2 pt-3">4 In Round, 3 Layer</Card.Title>
                          <Card.Subtitle>$35</Card.Subtitle>
                        <Card.Text>Feeds 5-10 people, tall and skinny.</Card.Text>
                      </Card>
                      <Card bg="dark" bg="dark">
                        <Card.Title className="pb-2 pt-3">6 In Round, 2 Layer</Card.Title>
                          <Card.Subtitle>$45</Card.Subtitle>
                        <Card.Text>Feeds 8-12 people.</Card.Text>
                      </Card>
                      <Card bg="dark" bg="dark">
                      <Card.Title className="pb-2 pt-3">8 In Round, 2 Layer</Card.Title>
                        <Card.Subtitle>$75</Card.Subtitle>
                      <Card.Text>Feeds 12-15 people.</Card.Text>
                      </Card>
                      <Card bg="dark" bg="dark">
                      <Card.Title className="pb-2 pt-3">1/2 Dozen Cupcakes</Card.Title>
                        <Card.Subtitle>$15</Card.Subtitle>
                      <Card.Text>Feeds 6 people.</Card.Text>
                      </Card>
                      <Card bg="dark" bg="dark">
                      <Card.Title className="pb-2 pt-3">Dozen Cupcakes
                      </Card.Title>
                        <Card.Subtitle>$30</Card.Subtitle>
                      <Card.Text>Feeds 12 people.</Card.Text>
                      </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <hr></hr>
            <Card bg="dark" bg="dark">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Flavor
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Card bg="dark" bg="dark">
                    <Card.Img></Card.Img>
                    <Card.Title>Vanilla</Card.Title>
                    <Card.Text>Classic, light and fluffy organic Vanilla Cake. Vegan options available. Coconut or Almond Milk Only<br></br>
                      <div className="allergens">
                        <div className="org"></div>
                        <div className="gf"></div>
                        <div className="vegan"></div>
                        <div className="df"></div>
                      </div>
                      </Card.Text>
                  </Card>
                  <Card bg="dark" bg="dark">
                    <Card.Img></Card.Img>
                    <Card.Title>Chocolate</Card.Title>
                    <Card.Text>Classic, fluffy chocolate cake. Vegan options available. Coconut or Almond Milk Only<br></br>
                      <div className="allergens"> 
                        <div className="org"></div>
                        <div className="gf"></div>
                        <div className="vegan"></div>
                        <div className="df"></div>
                      </div> 
                    </Card.Text>
                  </Card>
                  <Card bg="dark" bg="dark">
                    <Card.Img></Card.Img>
                    <Card.Title>Paleo Chocolate</Card.Title>
                    <Card.Subtitle>Additional $5</Card.Subtitle>
                    <Card.Text>Dense and Fudgy Chocolate cake made with Nut flours and Coconut milk.<br></br>
                    <div className="allergens">
                      <div className="org"></div>
                      <div className="gf"></div>
                      <div className="vegan"></div>
                      <div className="df"></div>
                    </div>
                    </Card.Text>
                  </Card>
                  <Card bg="dark" bg="dark">
                    <Card.Img></Card.Img>
                    <Card.Title>Red Velvet</Card.Title>
                    <Card.Text>Romantic Red Chocolate Cake made with the traditional Organic Cows Milk or Coconut Milk.<br></br>
                    <div className="allergens">
                      <div className="org"></div>
                      <div className="gf"></div>
                    </div>
                    </Card.Text>
                  </Card>
                  <Card bg="dark" bg="dark">
                    <Card.Img></Card.Img>
                    <Card.Title>Vegan Carrot Cake</Card.Title>
                    <Card.Subtitle>Additional $5</Card.Subtitle>
                    <Card.Text>Made with Love Carrot Cake, great for summer parties or a special Vegan option.<br></br>
                    <div className="allergens">
                      <div className="org"></div>
                      <div className="gf"></div>
                      <div className="vegan"></div>
                      <div className="df"></div>
                    </div>
                    </Card.Text>
                  </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <hr></hr>
            <Card bg="dark" bg="dark">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Frosting
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <Card bg="dark" bg="dark">
                    <Card.Img></Card.Img>
                    <Card.Title>Classic Buttercream Frosting</Card.Title>
                    <Card.Text>Creamy buttery Coconut or Almond Milk Frosting. Our most popular frosting choice as it is best for fine and detailed decorating.<br></br>
                    <div className="allergens">
                      <div className="org"></div>
                      <div className="gf"></div>
                      <div className="df"></div>
                    </div>
                    </Card.Text>
                  </Card>
                  <Card bg="dark" bg="dark">
                    <Card.Img></Card.Img>
                    <Card.Title>Vegan Cream Cheese Frosting</Card.Title>
                    <Card.Subtitle>Additional $3, $5, $8</Card.Subtitle>
                    <Card.Text>Classic Cream Cheese frosting made with Vegan Cream Cheese. Not a good choice for very detailed decorations.<br></br>
                    <div className="allergens">
                      <div className="org"></div>
                      <div className="gf"></div>
                      <div className="vegan"></div>
                      <div className="df"></div>
                    </div></Card.Text>
                  </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <hr></hr>
            <Card bg="dark" bg="dark">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Theme and Decor
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Card bg="dark" bg="dark">
                    <Card.Title>Basic Decorations</Card.Title>
                    <Card.Text>Choose your color theme, buttercream roses, balloons, Happy Birthday flag or name written on cake, or other easy themes.</Card.Text>
                  </Card>
                  <Card bg="dark" bg="dark">
                    <Card.Title>Sugar Paste Flowers</Card.Title>
                    <Card.Subtitle>Additional $2 per flower</Card.Subtitle>
                    <Card.Text>Hand sculpted Flowers of your choosing: Roses, Peony, Lillies, Orchids</Card.Text>
                  </Card>
                  <Card bg="dark" bg="dark">
                    <Card.Title>ButterCream Transfer</Card.Title>
                    <Card.Subtitle>Additional $3</Card.Subtitle>
                    <Card.Text>Take any logo, or simple picture and transfer it to the top of the cake using buttercream frosting only.</Card.Text>
                  </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card >
            <hr></hr>
            <Card bg="dark" bg="dark">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Natural Dyes and Other Add-ons
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                <Card bg="dark" bg="dark">
                    <Card.Title>Natural Dye</Card.Title>
                    <Card.Subtitle>Additional $5</Card.Subtitle>
                    <Card.Text>Natural dyes may appear lighter in color and have a subtle flavor depending on the color.</Card.Text>
                </Card>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <div className="icon-attribute">Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div className="icon-attribute">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div className="icon-attribute">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
          <h2 className="major">Gallery</h2>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613519770/Divine%20Confections/Peonycake_javnq5.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Buttercream frosting and Sugar Paste Peonies, 8 inch Round</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259360/Divine%20Confections/fairy_garden_gn8sev.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Fairy Garden with Natural Dyes, 8 inch Round</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259358/Divine%20Confections/Diana_ljmk1r.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Buttercream, Sugar paste flowers, 4inch Round 3 Layer</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259366/Divine%20Confections/fondant_animals_nbdwnx.jpg"
                  alt="Fourth slide"
                />
                <Carousel.Caption>
                  <h3>Fondant Animals and Decor, 8 inch round 3 layer</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259368/Divine%20Confections/mushrooms_lyotb4.jpg"
                  alt="Fifth slide"
                />
                <Carousel.Caption>
                  <h3>Mad Hatter Mushroom CupCakes</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259376/Divine%20Confections/spinkles_tycrr7.jpg"
                  alt="Sixth slide"
                />
                <Carousel.Caption>
                  <h3>Vegan Cream Cheese Frosting, 6 inch Round</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259377/Divine%20Confections/mothers_cupcake_jjb8ly.jpg"
                  alt="Seventh slide"
                />
                <Carousel.Caption>
                  <h3>Mother's Day Floral bouqet Cupcakes</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613520549/Divine%20Confections/IMG-20200806-WA0000_1_cbh1vj.jpg"
                  alt="Eight slide"
                />
                <Carousel.Caption>
                  <h3>Mud covered Dirtbike buttercream transfer</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259382/Divine%20Confections/fruit_tzvayh.jpg"
                  alt="Nineth slide"
                />
                <Carousel.Caption>
                  <h3>Fruit Topping</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259358/Divine%20Confections/bunny_cake_pj57mn.jpg"
                  alt="Tenth slide"
                />
                <Carousel.Caption>
                  <h3>Fondant Bunny Theme (Most Furry Friends Available)</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259372/Divine%20Confections/painted_mountains_g7b9ad.jpg"
                  alt="Eleventh slide"
                />
                <Carousel.Caption>
                  <h3>Hand Painted Mountains, cake crumble top</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259372/Divine%20Confections/Unicorn_cupcake_jqaohl.jpg"
                  alt="Twelveth slide"
                />
                <Carousel.Caption>
                  <h3>Unicorn Cupcakes</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259369/Divine%20Confections/fondant_v3vxhu.jpg"
                  alt="Thirteenth slide"
                />
                <Carousel.Caption>
                  <h3>Custom Theme, Fondant Topping</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1613259383/Divine%20Confections/gamer_transfer_gkwjpr.jpg"
                  alt="Fourteenth slide"
                />
                <Carousel.Caption>
                  <h3>Gamer Theme, Fondant Decor and Buttercream Transfer</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/legz444/image/upload/v1622698591/Divine%20Confections/mermaid_kbh5k1.jpg"
                  alt="Fifteenth slide"
                />
                <Carousel.Caption>
                  <h3>Mermaid Cake with Chocolate Molds</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
            
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
          <p className="about-me">I remember being a small child and my father taking me to the
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
          <form method="POST" action="https://formsubmit.co/a.divineconfections@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="8" required></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
            <input type="hidden" name="_next" value="/"></input>
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
