import React, { useState } from "react";

import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";

const App = () => {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
};

export default App;
