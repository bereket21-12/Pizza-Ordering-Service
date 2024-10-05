'use client';
import React, { useEffect, useState } from 'react';
import ReusableTable from '@/components/Dashboard/Order';
import { Button, Modal, Box, Typography, Chip, IconButton, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getOrder, updateOrderStatus } from '@/actions/adminAction'; 
import { useSession } from 'next-auth/react';
import { useAbility } from '@/provider/AbilityContext';
import { OrderStatus } from '@/types/orderStatus';

const ManageOrderPage: React.FC = () => {
  const ability = useAbility();
  const { data: session } = useSession();
  const [openToppingModal, setOpenToppingModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [orders, setOrders] = useState<any[]>([]); 
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>("PENDING");
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null); 

  useEffect(() => {
    const fetchOrders = async () => {
      const id = Number(session?.user?.restaurantId);
      const serverOrders = await getOrder(id); 
      console.log("orders :", serverOrders);
      setOrders(serverOrders);
    };
    fetchOrders();
  }, [session]);

  const columns = [
    { accessorKey: 'Pizza.name', header: 'Pizza Name' },
    ability.can('read', 'user') ? { accessorKey: 'customer.phoneNumber', header: 'Phone Number' } : null,
    {
      accessorKey: 'toppings',
      header: 'Topping',
      Cell: ({ cell }: any) => (
        <IconButton sx={{color:"#FFA500"}} onClick={() => handleToppingClick(cell.row.original.toppings)}>
          <VisibilityIcon />
        </IconButton>
      ),
    },
    { accessorKey: 'quantity', header: 'Quantity' },
    ability.can('update', 'Order')
      ? {
          accessorKey: 'status',
          header: 'Status',
          Cell: ({ cell }: any) => (
            <Button variant="contained" color="secondary" onClick={() => handleStatusClick(cell.row.original.id, cell.row.original.status)}>
              {cell.row.original.status}
            </Button>
          ),
        }
      : null,
  ].filter(Boolean) as Array<{ accessorKey: string; header: string; permission?: string }>; 
  
  const handleToppingClick = (toppings: any) => {
    const toppingNames = toppings.map((topping: any) => topping.topping.name);
    setSelectedToppings(toppingNames);
    setOpenToppingModal(true);
  };

  const handleStatusClick = (orderId: number, status: string) => {
    console.log("Setting selectedOrderId:", orderId); // Debugging log
    setSelectedOrderId(orderId);
    setSelectedStatus(status as OrderStatus);
    setOpenStatusModal(true);
  };

  const handleStatusChange = async (event: SelectChangeEvent<OrderStatus>) => {
    const newStatus = event.target.value as OrderStatus;
    setSelectedStatus(newStatus);

    if (selectedOrderId !== null) {
      console.log("Updating status for orderId:", selectedOrderId); // Debugging log
      await updateOrderStatus(selectedOrderId, newStatus); 
      const updatedOrders = orders.map(order =>
        order.id === selectedOrderId ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
    }
  };

  const handleCloseToppingModal = () => setOpenToppingModal(false);
  const handleCloseStatusModal = () => setOpenStatusModal(false);

  return (
    <Box sx={{ pt: 14 }}>
      <h1>Manage Orders</h1>
      <ReusableTable columns={columns} data={orders} />

      {/* Modal for Topping Details */}
      <Modal open={openToppingModal} onClose={handleCloseToppingModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Toppings
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {selectedToppings.map((topping, index) => (
              <Chip
                key={index}
                label={topping}
                sx={{
                  backgroundColor: getToppingColor(topping), // Function to assign unique color
                  color: 'white',
                }}
              />
            ))}
          </Box>
          <Button onClick={handleCloseToppingModal} variant="contained" color="warning" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>

      {/* Modal for Status Change */}
      <Modal open={openStatusModal} onClose={handleCloseStatusModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Change Order Status
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              value={selectedStatus}
              onChange={handleStatusChange}
              label="Status"
            >
              <MenuItem value="PENDING" sx={{ color: 'yellow' }}>Pending</MenuItem>
              <MenuItem value="DELIVERED" sx={{ color: 'green' }}>Delivered</MenuItem>
              <MenuItem value="CANCELLED" sx={{ color: 'red' }}>Cancelled</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleCloseStatusModal} variant="contained" color="warning" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

// Function to generate unique colors for toppings
const getToppingColor = (topping: string) => {
  const colors: { [key: string]: string } = {
    Pepperoni: '#FF6347',
    Mushroom: '#8B4513',
    Onions: '#6A5ACD',
    Tomato: '#FF4500',
    Basil: '#228B22',
    Olives: '#2E8B57',
  };
  return colors[topping] || '#888'; // Fallback color
};

export default ManageOrderPage;