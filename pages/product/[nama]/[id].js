export default function ProductDetail(props) {
  props?.id;
  props?.nama;
  return (
    <div>
      <h1>
        Product Detail {props?.id} {props?.nama}
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  let { id, nama } = context.params;
  context.params?.id;
  context.params?.nama;

  return {
    props: {
      id,
      nama,
    },
  };
}
