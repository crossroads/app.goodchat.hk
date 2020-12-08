const expectToBeOnPage = (
  container: HTMLElement,
  myPath: string,
  expectedPage: string
) => {
  const expectedPath = `/${expectedPage}`;
  expect(myPath).toEqual(expectedPath);
  expect(container.querySelector(".ion-page")).toHaveAttribute(
    "title",
    expectedPage
  );
};

export { expectToBeOnPage };
