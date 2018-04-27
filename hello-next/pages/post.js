import Layout from '../components/MyLayout';

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>这是我的电脑</p>
  </div>
);

// url props only occurs on default component,
// to pass it into another component, we use url props
export default (props) => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
