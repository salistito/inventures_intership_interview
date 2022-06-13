export interface IProduct {
  id: number;
  name: string;
  description: string | null;
  price: number;
  concentration: string;
  prescriptionType: string | null;
  package: string | null;
  composition: string | null;
  posology: string | null;
  display: string | null;
  contraindications: string | null;
  indications: string | null;
  containerQuantity: number;
  container: string;
  availability: {
    status: string;
  };
  imagesUrl: string;
  format: string;
  activePrinciple: string;
  laboratory: string;
}
