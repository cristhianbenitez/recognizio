export const calculateFaceLocation = (arrOfFaces) => {
  const image = document.getElementById('image');
  const width = Number(image.width);
  const height = Number(image.height);
  const faceLocations = arrOfFaces.map(
    (faces) => faces.region_info.bounding_box
  );
  const boxLocations = faceLocations.map((box) => {
    const { top_row, left_col, bottom_row, right_col } = box;
    return {
      topRow: top_row * height,
      leftCol: left_col * width,
      bottomRow: height - bottom_row * height,
      rightCol: width - right_col * width
    };
  });
  return boxLocations;
};

export default calculateFaceLocation;
