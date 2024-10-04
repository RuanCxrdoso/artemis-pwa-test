import { addDebitCard } from '@/actions/addCard'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from './ui/dialog'
import { RefreshCw, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function DebitCardComponent() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "4771 6080 1080 7889",
    expiry: "08/25",
    cardHolder: "iTech Artemis",
  });

  const handleAddCard = async (formData: FormData) => {
    try {
      const updatedCardInfo = await addDebitCard(formData);
      setCardInfo({
        cardNumber: updatedCardInfo.cardNumber.toString(),
        expiry: updatedCardInfo.expiry.toString(),
        cardHolder: updatedCardInfo.cardHolder.toString(),
      });
    } catch (error) {
      console.error("Failed to add card:", error);
    }
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Debit Card Account</CardTitle>
        <Button variant="ghost" size="sm"><RefreshCw size={16} /></Button>
      </CardHeader>
      <CardContent>
        <div className="bg-primary text-primary-foreground p-6 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">{cardInfo.cardHolder}</span>
            <span className="text-sm">Platinum Debit</span>
          </div>
          <div className="text-2xl mb-4">{cardInfo.cardNumber}</div>
          <div className="flex justify-between items-center">
            <span>Valid Thru {cardInfo.expiry}</span>
            <span className="text-2xl">VISA</span>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><Plus size={16} className="mr-2" /> Add Debit Card</Button>
          </DialogTrigger>
          <DialogContent className='w-4/5 rounded-md'>
            <DialogTitle>Add Debit Card</DialogTitle>
            <form action={handleAddCard}>
              <div className="flex flex-col space-y-4">
                <Input type="text" name="cardNumber" placeholder="Card Number" />
                <Input type="text" name="cardHolder" placeholder="Card Holder Name" />
                <div className="flex space-x-4">
                  <Input type="text" name="expiry" placeholder="MM/YY" />
                  <Input type="text" name="cvv" placeholder="CVV" />
                </div>
                <DialogClose asChild>
                  <Button type="submit">Add Card</Button>
                </DialogClose>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
