import { Button } from "primereact/button";
export default function Home() {
  return (
    <div>
      <div className="p-8 flex justify-content-center">
        <div className="w-25rem shadow-2 surface-card p-4 border-round flex flex-column justify-content-center">
          <Button label="Click" icon="pi pi-check"/>
        </div>
      </div>
    </div>
  )
}
