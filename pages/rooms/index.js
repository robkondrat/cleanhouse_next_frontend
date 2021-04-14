import { useRouter } from "next/dist/client/router";
import Rooms from "../../components/RoomsList";

export default function RoomsPage() {
  return (
    <div>
      <Rooms />
    </div>
  )
}