import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Background,
  Controls,
  MiniMap,
  Node,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  // Level 1 - Model Evaluation
  {
    id: 'l1-question',
    type: 'default',
    position: { x: 50, y: 50 },
    data: { 
      label: 'L1: Model evaluation\nDoes the AI model produce the desired responses?' 
    },
    style: {
      backgroundColor: '#3B82F6',
      color: 'white',
      border: '2px solid #1E40AF',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 80,
      fontSize: '12px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'l1-task',
    type: 'default',
    position: { x: 300, y: 50 },
    data: { 
      label: 'Iterate on models, knowledge base, prompts, evaluation databases, and benchmark metrics' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 180,
      height: 70,
      fontSize: '11px'
    },
  },
  {
    id: 'l1-stakeholders',
    type: 'default',
    position: { x: 520, y: 50 },
    data: { 
      label: 'AI Engineers\nProduct Researchers' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 120,
      height: 50,
      fontSize: '11px'
    },
  },
  
  // Level 2 - Product Evaluation
  {
    id: 'l2-question',
    type: 'default',
    position: { x: 50, y: 180 },
    data: { 
      label: 'L2: Product evaluation\nDoes the product facilitate meaningful interactions?' 
    },
    style: {
      backgroundColor: '#10B981',
      color: 'white',
      border: '2px solid #047857',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 80,
      fontSize: '12px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'l2-task',
    type: 'default',
    position: { x: 300, y: 180 },
    data: { 
      label: 'Experiment on how the product as a whole or features of the product influence users\' engagement, retention, and non-engagement metrics.' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 180,
      height: 70,
      fontSize: '11px'
    },
  },
  {
    id: 'l2-stakeholders',
    type: 'default',
    position: { x: 520, y: 180 },
    data: { 
      label: 'Product Managers\nData Scientists' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 120,
      height: 50,
      fontSize: '11px'
    },
  },

  // Level 3 - User Evaluation
  {
    id: 'l3-question',
    type: 'default',
    position: { x: 50, y: 310 },
    data: { 
      label: 'L3: User evaluation\nDoes the product positively support users\' thoughts, feelings, and actions?' 
    },
    style: {
      backgroundColor: '#8B5CF6',
      color: 'white',
      border: '2px solid #5B21B6',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 80,
      fontSize: '12px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'l3-task',
    type: 'default',
    position: { x: 300, y: 310 },
    data: { 
      label: 'Experiment on how the product as a whole or features of the product influence users\' proximal psychological and behavioral metrics.' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 180,
      height: 70,
      fontSize: '11px'
    },
  },
  {
    id: 'l3-stakeholders',
    type: 'default',
    position: { x: 520, y: 310 },
    data: { 
      label: 'Behavioral Researchers\nPsychologists' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 120,
      height: 50,
      fontSize: '11px'
    },
  },

  // Level 4 - Impact Evaluation
  {
    id: 'l4-question',
    type: 'default',
    position: { x: 50, y: 440 },
    data: { 
      label: 'L4: Impact evaluation\nDoes the product improve development outcomes?' 
    },
    style: {
      backgroundColor: '#F59E0B',
      color: 'white',
      border: '2px solid #D97706',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 80,
      fontSize: '12px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'l4-task',
    type: 'default',
    position: { x: 300, y: 440 },
    data: { 
      label: 'Assess the impact of the product on users\' distal developmental outcomes.' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 180,
      height: 50,
      fontSize: '11px'
    },
  },
  {
    id: 'l4-stakeholders',
    type: 'default',
    position: { x: 520, y: 440 },
    data: { 
      label: 'Economists,\nPublic Health,\nPolicymakers' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 120,
      height: 60,
      fontSize: '11px'
    },
  },

  // Cross-functional team header
  {
    id: 'team-header',
    type: 'default',
    position: { x: 500, y: 10 },
    data: { 
      label: 'Cross-Functional Team' 
    },
    style: {
      backgroundColor: 'transparent',
      border: '1px dashed #9CA3AF',
      borderRadius: '8px',
      padding: '5px',
      width: 160,
      height: 25,
      fontSize: '12px',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  },

  // Implications
  {
    id: 'implications-low',
    type: 'default',
    position: { x: 700, y: 100 },
    data: { 
      label: 'Lower cost, risk, and time spent' 
    },
    style: {
      backgroundColor: '#FEF3C7',
      border: '1px solid #F59E0B',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 50,
      fontSize: '11px',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  },
  {
    id: 'implications-high',
    type: 'default',
    position: { x: 700, y: 350 },
    data: { 
      label: 'Higher cost, risk, and time spent' 
    },
    style: {
      backgroundColor: '#FEE2E2',
      border: '1px solid #EF4444',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 50,
      fontSize: '11px',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  },
];

const initialEdges: Edge[] = [
  // Main flow arrows (feedback)
  {
    id: 'feedback-l1-l2',
    source: 'l1-question',
    target: 'l2-question',
    type: 'smoothstep',
    style: { stroke: '#6B7280', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#6B7280' },
  },
  {
    id: 'feedback-l2-l3',
    source: 'l2-question',
    target: 'l3-question',
    type: 'smoothstep',
    style: { stroke: '#6B7280', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#6B7280' },
  },
  {
    id: 'feedback-l3-l4',
    source: 'l3-question',
    target: 'l4-question',
    type: 'smoothstep',
    style: { stroke: '#6B7280', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#6B7280' },
  },

  // Work on arrows
  {
    id: 'work-l1',
    source: 'l1-task',
    target: 'l1-stakeholders',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
  },
  {
    id: 'work-l2',
    source: 'l2-task',
    target: 'l2-stakeholders',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
  },
  {
    id: 'work-l3',
    source: 'l3-task',
    target: 'l3-stakeholders',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
  },
  {
    id: 'work-l4',
    source: 'l4-task',
    target: 'l4-stakeholders',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
  },

  // Question to task arrows
  {
    id: 'q-to-t-l1',
    source: 'l1-question',
    target: 'l1-task',
    style: { stroke: '#D1D5DB', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#D1D5DB' },
  },
  {
    id: 'q-to-t-l2',
    source: 'l2-question',
    target: 'l2-task',
    style: { stroke: '#D1D5DB', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#D1D5DB' },
  },
  {
    id: 'q-to-t-l3',
    source: 'l3-question',
    target: 'l3-task',
    style: { stroke: '#D1D5DB', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#D1D5DB' },
  },
  {
    id: 'q-to-t-l4',
    source: 'l4-question',
    target: 'l4-task',
    style: { stroke: '#D1D5DB', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#D1D5DB' },
  },
];

const InteractiveFramework = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-[600px] border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        style={{ backgroundColor: "#F9FAFB" }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Background color="#E5E7EB" gap={16} />
        <Controls />
        <MiniMap 
          zoomable 
          pannable 
          style={{
            backgroundColor: '#F3F4F6',
            border: '1px solid #D1D5DB'
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default InteractiveFramework;