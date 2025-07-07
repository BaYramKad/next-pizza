import { Container, Filters, Title, TopBar, ProductsGroupList } from '@/components/shared';
import { ProductCardT } from '@/types/product-types';

const pizzas: ProductCardT[] = [
  {
    id: 1,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif',
    name: 'Моцарелла',
    price: 340,
  },
  {
    id: 2,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif',
    name: 'Моцарелла',
    price: 340,
  },
  {
    id: 3,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif',
    name: 'Моцарелла',
    price: 340,
  },
  {
    id: 4,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif',
    name: 'Моцарелла',
    price: 340,
  },
];

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
          <div className="flex-1">
            <ProductsGroupList items={pizzas} title="Пиццы" productId={1} />
            <ProductsGroupList items={pizzas} title="Начосы" productId={2} />
            <ProductsGroupList items={pizzas} title="Колбаски" productId={3} />
          </div>
        </div>
      </Container>
    </>
  );
}
