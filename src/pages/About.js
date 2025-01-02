import React, { useState } from "react";
import PokiSearch from "./components/ApiPoki";

export default function About() {
  return (
    <div className="about">
      <div className="summary">
        <h2>About Me</h2>
        <p>
          I've spent a lot of time working with React, learning how to implement
          seamless transitions and smooth interactive experiences for user
          interfaces.
        </p>
        <p>
          I specialize in integrating multimedia solutions to enhance user
          experiences. With a strong background in implementing video and photo
          functionalities, I ensure seamless media integration that captivates
          users. Additionally, I have experience incorporating secure payment
          methods, making transactions smooth and efficient. My goal is to
          create engaging, user-friendly systems that drive interaction and
          satisfaction.
        </p>
      </div>

      <div className="aboutSections">
        <div className="video">
          <h2>Experiences and Technical Explanations</h2>
          <p>
            I created an e-commerce site that was developed using React, React Router,
            JavaScript, CSS, and other web development technologies. The primary
            goal of this project is to create a fully functional platform for
            selling products while showcasing my skills as a developer.
            Additionally, I used this project as an opportunity to build a
            reusable component library that I can reference in future projects.
            The site features dynamic product listings, interactive product
            detail pages, and a fully functional shopping cart. Each component
            was designed with reusability in mind, ensuring scalability and easy
            future maintenance.
          </p>
        </div>

        <div>
          <h4>Component Organization</h4>
          <p>
            To keep the app organized, I adopted a top-down approach, where the
            root component (App.js) passes data down to child components via
            props. For instance, the ProductList component receives an array of
            products from App.js and maps over it to dynamically render each
            ProductCard. This pattern ensures that components remain modular and
            can be reused with different data.
            <br />I also utilized the container vs. presentational component
            pattern. While presentational components like ProductCard are solely
            responsible for rendering UI, container components like Cart handle
            logic, such as adding/removing items. This separation simplifies
            component management and enhances the app’s scalability.
          </p>
        </div>
        <div>
          <h4>State Management</h4>
          <p>
            The app's state management is handled using React's built-in
            useState and useEffect hooks. For example, I used useState to manage
            the shopping cart's state, such as adding or removing items. The
            useEffect hook is employed to fetch product data from an external
            API when the component mounts, ensuring that the app loads the
            latest product listings.
            <br />
            For communication between components, I applied state lifting. For
            example, the cart's state is lifted from individual CartItem
            components to a higher-level Cart component to ensure that the
            shopping cart's content is consistent across different views. This
            technique ensures centralized control over shared state.
            <br />
            If needed, I also integrated global state management. For this
            project, I focused on managing the cart and user authentication
            using the Context API. This allowed me to handle global state
            efficiently without the need for prop-drilling, especially as the
            app grew in complexity.
          </p>
        </div>
        <div>
          <h4>Prop Handling</h4>
          <p>
            Props are essential for data flow in React. I used props to pass
            information down to child components. For instance, product data is
            passed to ProductCard components to display individual items, and
            user information is passed to the Profile component for rendering
            the user's details.
            <br />
            Additionally, I passed functions as props to handle user
            interactions. For example, the handleAddToCart function is passed to
            the ProductCard component, allowing users to add items to the cart
            from individual product pages. This approach maintains the
            separation of concerns, keeping the logic in parent components while
            allowing child components to trigger updates via function calls.
          </p>
        </div>
        <PokiSearch></PokiSearch>
      </div>
    </div>
  );
}
