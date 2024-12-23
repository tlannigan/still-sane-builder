import Equipment from './inventory/Equipment'
import PaneLayout from './PaneLayout'

const InventoryPane = () => {
  return (
    <PaneLayout title="Inventory" side="right">
      <div className="flex justify-center items-center h-[5.25rem] bg-dark mb-2 sticky top-0">
        <select className="w-48 h-8 text-black px-4 rounded-md">
          <option>Acts 1-3</option>
          <option>Cruel</option>
          <option>Early Maps</option>
        </select>
      </div>
      <Equipment />
      <div className="h-[56rem] text-white p-6">
        <p>Helmet: life, resists, +2 minion</p>
      </div>
    </PaneLayout>
  )
}

export default InventoryPane
