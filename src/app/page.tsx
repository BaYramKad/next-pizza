import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-13">
        <Title text="Все пиццы" size="md" className="font-extrabold mb-4" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-6">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div>Список товаров</div>
        </div>
      </Container>
    </>
  );
}
