import React from "react";

function coba(param) {
  return <h1>{param}</h1>;
}

export default function SSR(props) {
  let data = props?.data;
  return (
    <div>
      <ul>
        {data.map((each) => {
          return coba(each.title);
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = [];
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => {
      data = response;
    });
  return {
    props: {
      data,
    },
  };
}
