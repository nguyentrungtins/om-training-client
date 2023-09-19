import { Button, Space } from "antd";

const Demo = () => {
  const size = "large";
  return (
    <div className="h-full">
      <Space direction="horizontal">
        <Space wrap>
          <Button type="primary" className="bg-blue-500" size={size}>
            Get
          </Button>
          <Button type="primary" className="bg-blue-500" size={size}>
            Post
          </Button>
          <Button type="primary" className="bg-blue-500" size={size}>
            Put
          </Button>
          <Button type="primary" className="bg-blue-500" size={size}>
            Patch
          </Button>
          <Button type="primary" className="bg-blue-500" size={size}>
            Delete
          </Button>
        </Space>
      </Space>
    </div>
  );
};
export default Demo;
