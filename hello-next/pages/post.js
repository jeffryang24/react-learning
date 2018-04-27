import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Content = ({show}) => (
  <div>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} alt="img"/>
  </div>
);

// url props only occurs on default component,
// to pass it into another component, we use url props
const Post = (props) => (
  <Layout>
    <Content show={props.show} />
  </Layout>
);
Post.getInitialProps = async(context) => {
  console.log(context);
  const {id} = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
