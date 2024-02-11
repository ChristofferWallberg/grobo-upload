// Configure the AWS SDK
import AWS from "aws-sdk";

interface UploadFileProps {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Upload: React.FC<UploadFileProps> = ({ handleFileChange }) => {
  const UploadFile = async () => {
    // S3 Region
    const REGION = "eu-west-1";
    const S3_BUCKET = "grobo-bucket";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "test",
      secretAccessKey: "test",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: File.name,
      Body: File,
    };

    // Uploading file to s3

    const upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " +
            parseInt((evt.loaded * 100) / evt.total).toString() +
            "%"
        );
      })
      .promise();

    await upload
      .then((data: unknown) => {
        console.log(data);
        // File successfully uploaded
        alert("File uploaded successfully.");
      })
      .catch((err: unknown) => {
        console.log(err);
        // Handle error
      });
    // Function to handle file and store it to file state
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={UploadFile}>Upload</button>
    </div>
  );
};
