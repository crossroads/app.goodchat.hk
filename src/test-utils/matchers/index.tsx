import { renderWithAct } from "test-utils/renderers";

interface PageHeaderProps {
  title: string;
  withBackButton: boolean;
  element: React.ReactElement;
}
const testPageHeader = ({
  title,
  withBackButton,
  element,
}: PageHeaderProps) => {
  test(`should have a ${title} title`, async () => {
    const { container } = await renderWithAct(element);
    expect(container!.querySelector("ion-header ion-title")).toHaveTextContent(
      title
    );
  });

  if (withBackButton) {
    test("should contain a back button", async () => {
      const { container } = await renderWithAct(element);
      expect(
        container!.querySelector("ion-header ion-back-button")
      ).toBeInTheDocument();
    });
  }
};

export { testPageHeader };
