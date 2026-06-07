
interface BlobKind {
  color: string,
  type: "full" | "striped",
}

const blobKindMap: BlobKind[] = {
  online: "", "striped";
  offline: "",
  server_down: "",
  tracker_down: "",
} as const

type blobKindName = keyof typeof blobKindMap;

interface ChartProp {
  begin_time_epoch?: number | null;
  end_time_epoch?: number | null;
  blob_kind: blobKindName;
}

interface ChartProps {
  entry: ChartProp
}





export const UptimeGanttChart: React.FC<ChartProps> = ({

}) => {
  return (
    <div className="flex h-64 bg-gray-600" style={{width: '50%'}}>
      <div 
        className="flex relative"
        style={{
          backgroundColor:'rgba(20, 57, 220, 0.6)',
          width: '30%',
          left: '10%'
        }}
        >
      </div>
      
        <div 
          className="flex relative"
          style={{
            backgroundColor:'rgba(220,20,60,0.6)',
            width: '30%',
            left: '0%'
          }}
          >
        </div>
    </div>
  )
}
