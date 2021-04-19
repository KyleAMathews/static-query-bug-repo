const React = require(`react`);
const { useStaticQuery } = require("gatsby");

module.exports = function Layout(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  console.log(data);
  return <div>{props.children}</div>;
};
