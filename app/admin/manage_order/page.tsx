"use client";
import React, { useEffect, useState } from "react";
import ReusableTable from "@/components/Dashboard/Reusable";
import {
  Button,
  Modal,
  Box,
  Typography,
  Chip,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  getOrder,
  updateOrderStatus,
  searchOrder,
  searchOrderColumen,
} from "@/actions/adminAction";
import { useSession } from "next-auth/react";
import { useAbility } from "@/provider/AbilityContext";
import { OrderStatus } from "@/types/orderStatus";

const ManageOrderPage: React.FC = () => {
  const ability = useAbility();
  const { data: session } = useSession();
  const [openToppingModal, setOpenToppingModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>("PENDING");
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const fetchOrders = async () => {
    const id = Number(session?.user?.restaurantId);
    const serverOrders = await getOrder(id);
    console.log("orders :", serverOrders);
    setOrders(serverOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, [session]);

  const handleFilterChange = async ({
    filters,
    globalFilter,
  }: {
    filters: { id: string; value: string | number | null }[];
    globalFilter: string;
  }) => {
    console.log("Filtering orders:", filters, globalFilter);
    try {
      const restaurantId = session?.user?.restaurantId;
      if (typeof restaurantId === "number") {
        let searchResults;
        if (globalFilter) {
          searchResults = await searchOrder(globalFilter, restaurantId);
        } else if (filters.length > 0) {
          const filterParams = filters.reduce(
            (acc: Record<string, string | number | null>, filter) => {
              const value = filter.value;
              if (
                typeof value === "string" ||
                typeof value === "number" ||
                value === null
              ) {
                switch (filter.id) {
                  case "Pizza.name":
                    acc.pizzaName = value;
                    break;
                  case "customer.phoneNumber":
                    acc.customerPhone = value;
                    break;
                  case "status":
                    acc.status = value;
                    break;
                  default:
                    acc[filter.id] = value;
                }
              }
              return acc;
            },
            {} as Record<string, string | number | null>
          );

          console.log(
            "Filter params before calling searchOrderColumen:",
            filterParams
          );

          searchResults = await searchOrderColumen(filterParams, restaurantId);
          console.log("Column filter results:", searchResults);
          setOrders(Array.isArray(searchResults) ? searchResults : []);
        } else {
          searchResults = await getOrder(restaurantId);
        }
        console.log("Filter results:", searchResults);
        setOrders(Array.isArray(searchResults) ? searchResults : []);
      } else {
        console.error("Invalid restaurant ID:", restaurantId);
      }
    } catch (error) {
      console.error("Failed to filter orders:", error);
    }
  };

  const columns = [
    { accessorKey: "Pizza.name", header: "Pizza Name" },
    ability.can("read", "customer")
      ? { accessorKey: "customer.phoneNumber", header: "Phone Number" }
      : null,
    {
      accessorKey: "toppings",
      header: "Topping",
      Cell: ({ cell }: any) => (
        <IconButton
          sx={{ color: "#FFA500" }}
          onClick={() => handleToppingClick(cell.row.original.toppings)}
        >
          <VisibilityIcon />
        </IconButton>
      ),
    },
    { accessorKey: "quantity", header: "Quantity" },
    ability.can("update", "order")
      ? {
          accessorKey: "status",
          header: "Status",
          Cell: ({ cell }: any) => (
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                handleStatusClick(
                  cell.row.original.id,
                  cell.row.original.status
                )
              }
            >
              {cell.row.original.status}
            </Button>
          ),
        }
      : null,
  ].filter(Boolean);

  const handleToppingClick = (toppings: any) => {
    const toppingNames = toppings.map((topping: any) => topping.topping.name);
    setSelectedToppings(toppingNames);
    setOpenToppingModal(true);
  };

  const handleStatusClick = (orderId: number, status: string) => {
    setSelectedOrderId(orderId);
    setSelectedStatus(status as OrderStatus);
    setOpenStatusModal(true);
  };

  const handleStatusChange = async (event: SelectChangeEvent<OrderStatus>) => {
    const newStatus = event.target.value as OrderStatus;
    setSelectedStatus(newStatus);

    if (selectedOrderId !== null) {
      console.log("Updating status for orderId:", selectedOrderId);
      await updateOrderStatus(selectedOrderId, newStatus);
      const updatedOrders = orders.map((order) =>
        order.id === selectedOrderId ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
    }
  };

  const handleCloseToppingModal = () => setOpenToppingModal(false);
  const handleCloseStatusModal = () => setOpenStatusModal(false);

  return (
    <Box sx={{ pt: 14 }}>
      <ReusableTable
        columns={columns}
        data={orders}
        onFilterChange={handleFilterChange}
      />

      {/* Modal for Topping Details */}
      <Modal open={openToppingModal} onClose={handleCloseToppingModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
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
                  backgroundColor: getToppingColor(topping),
                  color: "white",
                }}
              />
            ))}
          </Box>
          <Button
            onClick={handleCloseToppingModal}
            variant="contained"
            color="warning"
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* Modal for Status Change */}
      <Modal open={openStatusModal} onClose={handleCloseStatusModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
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
              <MenuItem value="PENDING" sx={{ color: "yellow" }}>
                Pending
              </MenuItem>
              <MenuItem value="DELIVERED" sx={{ color: "green" }}>
                Delivered
              </MenuItem>
              <MenuItem value="CANCELLED" sx={{ color: "red" }}>
                Cancelled
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleCloseStatusModal}
            variant="contained"
            color="warning"
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

const getToppingColor = (topping: string) => {
  const colors: { [key: string]: string } = {
    Pepperoni: "#FF6347",
    Mushroom: "#8B4513",
    Onions: "#6A5ACD",
    Tomato: "#FF4500",
    Basil: "#228B22",
    Olives: "#2E8B57",
  };
  return colors[topping] || "#888";
};

export default ManageOrderPage;
