import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Item } from "../../src/components/Item";
import { Loader } from "semantic-ui-react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            로딩 중...
          </Loader>
        </div>
      ) : (
        <Item item={item} />
      )}
    </>
  );
};

export default Post;
