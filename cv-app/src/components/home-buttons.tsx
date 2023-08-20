"use client";
import Button from "./button";

export default function HomeButtons() {
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          console.log("Hola mundo");
        }}
      >
        Download CV
      </Button>
      <Button href="/contact" type="secondary">
        Contact
      </Button>
    </>
  );
}
