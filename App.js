import React, { useState } from "react";

import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";

const App = () => {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput imageUrl={imageUri} onChangeImage={setImageUri} />
    </Screen>
  );
};

export default App;
