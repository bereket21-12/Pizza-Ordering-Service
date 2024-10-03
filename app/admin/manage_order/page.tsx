'use client';
import React, { useEffect, useState } from 'react';
import ReusableTable from '@/components/Dashboard/Order';
import { Button, Modal, Box, Typography, Chip, IconButton, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getOrder } from '@/actions/adminAction';
import { useSession } from 'next-auth/react';
import { useAbility } from '@/provider/AbilityContext';

const ManageOrderPage: React.FC = () => {
  const ability = useAbility();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState<any[]>([]); 
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null); 
  useEffect(() => {
    const fetchOrders = async () => {
      const id = Number(session?.user?.restaurantId);
      const serverOrders = await getOrder(id); 
      setOrders(serverOrders);
    };
    fetchOrders();
  }, [session]);


  const columns = [
    { accessorKey: 'name', header: 'Pizza Name' },

    ability.can('read', 'user') ? { accessorKey: 'phoneNumber', header: 'Phone Number' } : null,

    {
      accessorKey: 'toppings',
      header: 'Topping',
      Cell: ({ cell }: any) => (
        <IconButton color="primary" onClick={() => handleToppingClick(cell.row.original.toppings)}>
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
    setOpen(true);
  };

 
  const handleStatusClick = (orderId: number, status: string) => {
    setSelectedOrderId(orderId);
    setSelectedStatus(status);
    setOpen(true);
  };

  // Handle Status Change
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(event.target.value);
  };

  // Close the Modal
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ pt: 14 }}>
      <h1>Manage Orders</h1>
      <ReusableTable columns={columns} data={orders} />

      {/* Modal for Topping Details */}
      <Modal open={open} onClose={handleClose}>
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
          {selectedOrderId ? (
            <>
              <Typography variant="h6" gutterBottom>
                Change Order Status
              </Typography>
              <RadioGroup value={selectedStatus} onChange={handleStatusChange}>
                <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                <FormControlLabel value="Delivered" control={<Radio />} label="Delivered" />
                <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" />
              </RadioGroup>
            </>
          ) : (
            <>
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
            </>
          )}

          <Button onClick={handleClose} variant="contained" color="secondary" sx={{ mt: 2 }}>
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
