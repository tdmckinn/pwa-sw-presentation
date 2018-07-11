// @ts-nocheck
import React from 'react'
import CodeSlide from 'spectacle-code-slide'

import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Link,
  Fill,
  Quote,
  Slide,
  Text
} from 'spectacle'

import { serviceWorkerEx } from './ex-code/sw.example'
import { manifestEx } from './ex-code/manifest.example'
import { a2hsEx } from './ex-code/a2hs.example'
import { preload, prefetch } from './ex-code/preload.example'

import SkookumSvg from './skookum'

import 'normalize.css'
import './styles.css'

import createTheme from 'spectacle/lib/themes/default'

// limitations = https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7
const images = {
  pwaImg: require('../assets/pwa-fast.png'),
  hnpwa: require('../assets/hnpwa.png'),
  noInternet: require('../assets/no-internet-dino.png')
}

const theme = createTheme(
  {
    primary: '#000',
    secondary: '#03A9FC',
    tertiary: '#47B784',
    black: '#000',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const JSIconSvg = () => (
  <svg viewBox="0 0 630 630" height="50px" width="50px">
    <path fill="#f7df1e" d="M0 0h630v630H0z" />
    <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
  </svg>
)

const thankyouListTextSize = '26px'

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        progress="bar"
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <img
            src={images.pwaImg.replace('/', '')}
            style={{ width: 146, height: 'auto' }}
          />
          <span
            style={{ fontSize: 8, fontStyle: 'italic', color: 'slategray' }}
          >
            image credit: Google Developers
          </span>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            PWA's and Service Workers
          </Heading>
          <br />
          <span style={{ fontSize: 30, color: '#fff' }}>
            Google & Best Practices
          </span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 100
            }}
          >
            {/* <JSIconSvg /> */}
            <SkookumSvg />
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <svg
                style={{ width: 90, height: 60 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 350"
              >
                <defs />
                <rect className="cls-1" width="350" height="350" />
                <path
                  className="cls-2"
                  style={{ fill: '#1da1f2' }}
                  d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
                />
              </svg>
              <div style={{ fontSize: 26, paddingTop: 6 }}>@TirellMckinnon</div>
            </div>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"Web apps are only getting better"</Quote>
            <Cite textColor="primary">Circut Breaker</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Properties of a PWA'S
          </Heading>
          <Layout>
            <Fill>
              <List>
                <ListItem>Responsive</ListItem>
                <ListItem>
                  Offline <i className="material-icons">wifi_off</i>
                </ListItem>
                <ListItem>App-like</ListItem>
                <ListItem>Safe</ListItem>
                <ListItem>Discoverable</ListItem>
                <ListItem>Installable</ListItem>
                <ListItem>Shareable</ListItem>
              </List>
            </Fill>
            <Fill>
              <Image src={images.noInternet.replace('/', '')} />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading textColor="secondary">PWA Meta</Heading>
          <Layout>
            <Fill>
              <List>
                <ListItem>Viewport</ListItem>
                <ListItem>Manifest.json</ListItem>
                <ListItem>Add to Home</ListItem>
              </List>
            </Fill>
            <Fill>
              <Image
                src="http://res.cloudinary.com/drjn3dk05/image/upload/q_auto:low,f_auto/v1531271067/myphone_bjiupw.png"
                style={{ width: 250 }}
              />
            </Fill>
          </Layout>
          <Text textColor="black">.</Text>
          <Text textColor="black">.</Text>
          <Text textColor="black">.</Text>
          <Text textColor="black">.</Text>
        </Slide>
        <Slide>
          <Heading textColor="secondary">Viewport</Heading>
          <CodePane
            lang="html"
            source={`
              <!--
              viewport - allows control over scaling over the viewport vs default desktop widths
              -->
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
              `}
            margin="20px 1px"
          />
        </Slide>
        <CodeSlide
          lang="js"
          color="#secondary"
          code={manifestEx}
          ranges={[{ loc: [0, 10], title: 'Manifest JSON' }, { loc: [10, 20] }]}
        />
        <CodeSlide
          lang="js"
          color="#secondary"
          code={a2hsEx}
          ranges={[
            { loc: [0, 4], title: 'A2HS' },
            { loc: [4, 7] },
            { loc: [7, 20] }
          ]}
        />
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Measuring Performance as You Go
          </Heading>
        </Slide>
        <Slide bgImage="https://developers.google.com/web/progressive-web-apps/images/pwa-lighthouse.png">
          <Heading size={1} fit caps lineHeight={1} textColor="#000">
            Lighthouse
          </Heading>
        </Slide>
        <Slide>
          <Text textColor="#fff">Framwework Support</Text>
          <Link href="https://hnpwa.com/" target="_blank">
            <Image src="https://hnpwa.com/assets/images/hnpwa-logo.png" />
          </Link>
        </Slide>
        <Slide>
          <Heading lineHeight={1} textColor="secondary">
            Demo
          </Heading>
          <Layout>
            <Fill s>
              <Image src="https://res.cloudinary.com/drjn3dk05/image/upload/q_auto:low,f_auto/v1531247642/app-home_figc08.png" />
            </Fill>
            <span> . </span>
            <Fill>
              <Image src="http://res.cloudinary.com/drjn3dk05/image/upload/q_auto:low,f_auto/v1531272474/add2hs_achfe9.png" />
            </Fill>
            <span> . </span>
            <Fill>
              <Image src="https://res.cloudinary.com/drjn3dk05/image/upload/q_auto:low,f_auto/v1531247641/app_jpnvu9.png" />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web Workers
          </Heading>
          <Link href="https://caniuse.com/#search=web%20wo">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
              <path fill="orange" fillRule="evenodd" clipRule="evenodd" d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
              <path fill="none" d="M0 0h24v24H0z"/>
            </svg>
          </Link>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Service Workers
          </Heading>
          <Image height="100" width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1024px-Google_Chrome_icon_%28September_2014%29.svg.png" />
          <Text textColor="#fff">4 Types of Cache</Text>
        </Slide>
        <CodeSlide
          lang="js"
          color="#secondary"
          code={serviceWorkerEx}
          ranges={[
            {
              loc: [0, 4],
              title: 'Service Worker Lifecycle',
              note: 'Download (Parse), Install, Activate, Redundant'
            },
            { loc: [6, 16] },
            { loc: [18, 31] },
            { loc: [33, 43] }
          ]}
        />
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Push API and Notification API
          </Heading>
          <Text textColor="#fff">Web Push, Subscriptions, VapidDetails</Text>
        </Slide>
        <Slide>
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Performance Patterns
          </Heading>
          <Text textColor="#fff">PRPL - Push Pull Render Location </Text>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1} textColor="secondary">
            <span style={{ color: 'orange' }}>(P)</span>RPL - Push
          </Heading>
          <br />
          <CodePane lang="html" source={preload} />
        </Slide>
        <Slide>
          <Heading fit lineHeight={1} textColor="secondary">
            P<span style={{ color: 'orange' }}>(R)</span>PL - Render
          </Heading>
          <Text textColor="#fff">Initial Route</Text>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1} textColor="secondary">
            <a
              href="https://caniuse.com/#search=prefetch"
              target="_blank"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              PR<span style={{ color: 'orange' }}>(P)</span>L - Pre-Cache
            </a>
          </Heading>
          <CodePane lang="html" source={prefetch} />
        </Slide>
        <Slide>
          <Heading fit lineHeight={1} textColor="secondary">
            PRP<span style={{ color: 'orange' }}>(L)</span> - Lazy Load
          </Heading>
          <Text textColor="#fff">On Demand - Dynamic Imports</Text>
          <CodePane lang="js" source={` import('./myScript').then((module) => ...etc`} />
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Easy Mode <i className="material-icons">directions_run</i>
          </Heading>
          <List>
            <ListItem>Framwework CLI's</ListItem>
            <ListItem>Workbox</ListItem>
            <ListItem>Webpack</ListItem>
          </List>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="black">
            Questions ?
          </Heading>
          <Layout>
            <Fill>
              <Text textAlign="left" textColor="black">
                Resources =>
              </Text>
              <List>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://hnpwa.com/">HNPWA</Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://developers.google.com/web/tools/workbox/">
                    Workbox
                  </Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://developers.google.com/web/progressive-web-apps/">
                    Google PWA's
                  </Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">
                    Service Workers
                  </Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://w3c.github.io/">
                    World Wide Web Consortium (W3C)
                  </Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://serviceworke.rs/">
                    Service Worker Cookbook
                  </Link>
                </ListItem>
                <ListItem textSize={thankyouListTextSize}>
                  <Link href="https://github.com/tdmckinn/ffx-nfl-fantasy">
                    NFX Fantasy - Demo
                  </Link>
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Image src="https://res.cloudinary.com/drjn3dk05/image/upload/q_auto/v1531252749/glen-swq.png" />
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    )
  }
}

export default Presentation
