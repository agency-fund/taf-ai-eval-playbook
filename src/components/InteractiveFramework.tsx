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
  // Column Headers
  {
    id: 'header-levels',
    type: 'default',
    position: { x: 50, y: 10 },
    data: { 
      label: 'Levels of Evaluation' 
    },
    style: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: 200,
      height: 30
    },
    draggable: false,
    selectable: false,
  },
  {
    id: 'header-tasks',
    type: 'default',
    position: { x: 300, y: 10 },
    data: { 
      label: 'Main Task' 
    },
    style: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: 200,
      height: 30
    },
    draggable: false,
    selectable: false,
  },
  {
    id: 'header-stakeholders',
    type: 'default',
    position: { x: 600, y: 10 },
    data: { 
      label: 'Key Stakeholders' 
    },
    style: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: 160,
      height: 30
    },
    draggable: false,
    selectable: false,
  },
  {
    id: 'header-implications',
    type: 'default',
    position: { x: 780, y: 10 },
    data: { 
      label: 'Implications' 
    },
    style: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: 140,
      height: 30
    },
    draggable: false,
    selectable: false,
  },

  // Level 1 - Model Evaluation
  {
    id: 'l1-question',
    type: 'default',
    position: { x: 50, y: 70 },
    data: { 
      label: 'L1: Model evaluation:\nDoes the AI model produce the desired responses?' 
    },
    style: {
      backgroundColor: '#3B82F6',
      color: 'white',
      border: '2px solid #1E40AF',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 90,
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l1-task',
    type: 'default',
    position: { x: 285, y: 70 },
    data: { 
      label: 'Iterate on models, knowledge base, prompts, evaluation databases, and benchmark metrics' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 200,
      height: 90,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l1-stakeholders',
    type: 'default',
    position: { x: 600, y: 70 },
    data: { 
      label: 'AI Engineers,\nProduct Researchers' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 60,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l1-iterative',
    type: 'default',
    position: { x: 250, y: 85 },
    data: { 
      label: '⟲' 
    },
    style: {
      backgroundColor: '#DBEAFE',
      border: '2px solid #3B82F6',
      borderRadius: '50%',
      padding: '5px',
      width: 30,
      height: 30,
      fontSize: '16px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    draggable: false,
    selectable: false,
  },
  
  // Level 2 - Product Evaluation
  {
    id: 'l2-question',
    type: 'default',
    position: { x: 50, y: 200 },
    data: { 
      label: 'L2: Product evaluation:\nDoes the product facilitate meaningful interactions?' 
    },
    style: {
      backgroundColor: '#10B981',
      color: 'white',
      border: '2px solid #047857',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 90,
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l2-task',
    type: 'default',
    position: { x: 285, y: 200 },
    data: { 
      label: 'Experiment on how the product as a whole or features of the product influence users\' engagement, retention, and non-engagement metrics.' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 200,
      height: 90,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l2-stakeholders',
    type: 'default',
    position: { x: 600, y: 200 },
    data: { 
      label: 'Product Managers,\nData Scientists' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 60,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l2-iterative',
    type: 'default',
    position: { x: 250, y: 215 },
    data: { 
      label: '⟲' 
    },
    style: {
      backgroundColor: '#D1FAE5',
      border: '2px solid #10B981',
      borderRadius: '50%',
      padding: '5px',
      width: 30,
      height: 30,
      fontSize: '16px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    draggable: false,
    selectable: false,
  },

  // Level 3 - User Evaluation
  {
    id: 'l3-question',
    type: 'default',
    position: { x: 50, y: 330 },
    data: { 
      label: 'L3: User evaluation:\nDoes the product positively support users\' thoughts, feelings, and actions?' 
    },
    style: {
      backgroundColor: '#8B5CF6',
      color: 'white',
      border: '2px solid #5B21B6',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 90,
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l3-task',
    type: 'default',
    position: { x: 285, y: 330 },
    data: { 
      label: 'Experiment on how the product as a whole or features of the product influence users\' proximal psychological and behavioral metrics.' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 200,
      height: 90,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l3-stakeholders',
    type: 'default',
    position: { x: 600, y: 330 },
    data: { 
      label: 'Behavioral Researchers,\nPsychologists' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 60,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l3-iterative',
    type: 'default',
    position: { x: 250, y: 345 },
    data: { 
      label: '⟲' 
    },
    style: {
      backgroundColor: '#EDE9FE',
      border: '2px solid #8B5CF6',
      borderRadius: '50%',
      padding: '5px',
      width: 30,
      height: 30,
      fontSize: '16px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    draggable: false,
    selectable: false,
  },

  // Level 4 - Impact Evaluation
  {
    id: 'l4-question',
    type: 'default',
    position: { x: 50, y: 460 },
    data: { 
      label: 'L4: Impact evaluation:\nDoes the product improve development outcomes?' 
    },
    style: {
      backgroundColor: '#F59E0B',
      color: 'white',
      border: '2px solid #D97706',
      borderRadius: '8px',
      padding: '10px',
      width: 200,
      height: 90,
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l4-task',
    type: 'default',
    position: { x: 285, y: 460 },
    data: { 
      label: 'Assess the impact of the product on users\' distal developmental outcomes.' 
    },
    style: {
      backgroundColor: '#F3F4F6',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      width: 200,
      height: 90,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'l4-stakeholders',
    type: 'default',
    position: { x: 600, y: 460 },
    data: { 
      label: 'Economists,\nPublic Health,\nPolicymakers' 
    },
    style: {
      backgroundColor: '#E5E7EB',
      border: '1px solid #9CA3AF',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 80,
      fontSize: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },

  // Stakeholder container
  {
    id: 'stakeholder-container',
    type: 'default',
    position: { x: 590, y: 60 },
    data: { 
      label: '' 
    },
    style: {
      backgroundColor: 'transparent',
      border: '2px dashed #9CA3AF',
      borderRadius: '8px',
      width: 160,
      height: 490,
      zIndex: -1
    },
    draggable: false,
    selectable: false,
  },

  // Cross-functional team label
  {
    id: 'cross-functional-label',
    type: 'default',
    position: { x: 600, y: 560 },
    data: { 
      label: 'Cross-functional Team' 
    },
    style: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: 160,
      height: 30,
      color: '#4B5563',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    draggable: false,
    selectable: false,
  },

  // Implications
  {
    id: 'implications-low',
    type: 'default',
    position: { x: 780, y: 85 },
    data: { 
      label: 'Lower cost, risk, and time spent' 
    },
    style: {
      backgroundColor: '#FEF3C7',
      border: '1px solid #F59E0B',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 60,
      fontSize: '11px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
  {
    id: 'implications-high',
    type: 'default',
    position: { x: 780, y: 485 },
    data: { 
      label: 'Higher cost, risk, and time spent' 
    },
    style: {
      backgroundColor: '#FEE2E2',
      border: '1px solid #EF4444',
      borderRadius: '8px',
      padding: '8px',
      width: 140,
      height: 60,
      fontSize: '11px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
  },
];

const initialEdges: Edge[] = [
  // Main flow arrows (forward)
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

  // Feedback arrows (reverse flow)
  {
    id: 'feedback-l3-l2',
    source: 'l3-question',
    target: 'l2-question',
    type: 'smoothstep',
    style: { stroke: '#A855F7', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#A855F7' },
  },
  {
    id: 'feedback-l3-l1',
    source: 'l3-question',
    target: 'l1-question',
    type: 'smoothstep',
    style: { stroke: '#A855F7', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#A855F7' },
  },
  {
    id: 'feedback-l2-l1',
    source: 'l2-question',
    target: 'l1-question',
    type: 'smoothstep',
    style: { stroke: '#10B981', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10B981' },
  },

  // Implications arrow
  {
    id: 'implications-arrow',
    source: 'implications-low',
    target: 'implications-high',
    type: 'smoothstep',
    style: { stroke: '#F59E0B', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#F59E0B' },
  },

  // Work on arrows (reversed direction)
  {
    id: 'work-l1',
    source: 'l1-stakeholders',
    target: 'l1-task',
    type: 'smoothstep',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
    labelStyle: { fontSize: '10px', fill: '#6B7280' },
    labelBgStyle: { fill: '#F9FAFB' },
  },
  {
    id: 'work-l2',
    source: 'l2-stakeholders',
    target: 'l2-task',
    type: 'smoothstep',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
    labelStyle: { fontSize: '10px', fill: '#6B7280' },
    labelBgStyle: { fill: '#F9FAFB' },
  },
  {
    id: 'work-l3',
    source: 'l3-stakeholders',
    target: 'l3-task',
    type: 'smoothstep',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
    labelStyle: { fontSize: '10px', fill: '#6B7280' },
    labelBgStyle: { fill: '#F9FAFB' },
  },
  {
    id: 'work-l4',
    source: 'l4-stakeholders',
    target: 'l4-task',
    type: 'smoothstep',
    style: { stroke: '#9CA3AF', strokeWidth: 1 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF' },
    label: 'work on',
    labelStyle: { fontSize: '10px', fill: '#6B7280' },
    labelBgStyle: { fill: '#F9FAFB' },
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
        proOptions={{ hideAttribution: true }}
        style={{ backgroundColor: "#F9FAFB" }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Background color="#E5E7EB" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default InteractiveFramework;