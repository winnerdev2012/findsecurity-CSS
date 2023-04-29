import React, {createContext, useEffect, useState} from "react";
import {
  getCollectionsAdmin,
} from "../API/CollectionsAPI";
import {getCollectionCampaigns} from "../API/CampaignsAPI";
import {
  Collection,
  CollectionBilling,
  InvoiceProps
} from "../Types/CollectionTypes";
import {getCollectionBillingInfo, getInvoices} from "../API/PaymentAPI";
import {getCollectionAdmins} from "../API/AccessAPI";
import {addSessionCrisp} from "../Integrations/Crisp";
import {getForcedAdminCollectionId} from "../Integrations/LocalStorage";
import {AdminUser} from "../Types/UserTypes";
import {ROUTES} from "../routes/PagesRoutes";

export interface AdminCollectionContextI {
  collection: Collection | null;
  campaigns: any[] | null;
  billingInfo: CollectionBilling | null;
  invoices: InvoiceProps[] | null;
  adminUsers: AdminUser[] | null;
  openBillingModal: boolean;
  openPaymentCheckoutModal: boolean;
  collectionLoading: boolean;
  updateCollectionData: Function;
  updateCampaignsData: Function;
  updateBillingInfo: Function;
  updateCollectionAdminUsers: Function;
  updateInvoiceData: () => void;
  setOpenBillingModal: Function;
  setOpenPaymentCheckoutModal: Function;
}


const emptyFunction = () => {
}

const defaultState = {
  collection: null,
  campaigns: null,
  rewards: null,
  billingInfo: null,
  invoices: null,
  adminUsers: null,
  openBillingModal: false,
  openPaymentCheckoutModal: false,
  giveawayExclusiveQuests: null,
  paymentCard: {loading: false, card: null},
  claimedRewards: null,
  collectionLoading: false,
  updateCollectionData: emptyFunction,
  updateCampaignsData: emptyFunction,
  updateRewardData: emptyFunction,
  updateBillingInfo: emptyFunction,
  updateCollectionAdminUsers: emptyFunction,
  updateInvoiceData: () =>{},
  setOpenBillingModal: emptyFunction,
  setOpenPaymentCheckoutModal: emptyFunction,
  updatePaymentCard: emptyFunction,
  loading: true
}


export const AdminCollectionContext = createContext<AdminCollectionContextI>(defaultState);

const AdminCollectionContextProvider = (props: any) => {

  const [collection, setCollection] = useState<Collection | null>(null);
  const [campaigns, setCampaigns] = useState(null);
  const [billingInfo, setBillingInfo] = useState<CollectionBilling>({
    plan: "free",
    monthlyPrice: "",
    card: null,
    loading: false,
    subscription_status: 1,
    next_payment_attempt: null,
  });
  const [adminUsers, setAdminUsers] = useState<AdminUser[] | null>(null);
  const [openBillingModal, setOpenBillingModal] = useState(false);
  const [openPaymentCheckoutModal, setOpenPaymentCheckoutModal] = useState(false);
  const [invoices, setInvoices] = useState<InvoiceProps[] | null>(null);
  const [campaignDataLoading, setCampaignDataLoading] = useState(false);

  const [collectionLoading, setCollectionLoading] = useState(false);


  useEffect(() => {
    if (collection) {
      addSessionCrisp(null, collection)
      updateBillingInfo()
    }
  }, [collection?.id])

  async function updateCollectionData(navigation?: any | null) {
    if (collectionLoading) {
      return;
    }
    setCollectionLoading(true);
    try {
      const forcedId = getForcedAdminCollectionId()
      const {collection: data} = await getCollectionsAdmin(forcedId);
      if (data) {
        setCollection(data);
      } else {
        setCollectionLoading(false)
        navigation && navigation(ROUTES.HOME)
      }

    } catch (e) {
      console.log("AdminCollectionContextProvider | error: ", e)
    }
    setCollectionLoading(false);
  }


  const updateCampaignsData = async () => {
    if (!collection) {
      return
    }
    if (campaignDataLoading) {
      return
    }
    setCampaignDataLoading(true);
    try {
      const {campaigns: data} = await getCollectionCampaigns(collection.id);
      setCampaigns(data);
    } catch (e) {
      console.log("updateCampaignsData | error: ", e)
    }
    setCampaignDataLoading(false);
  }


  const updateBillingInfo = async () => {
    if (!collection) {
      return
    }
    if (billingInfo.loading) {
      return
    }

    setBillingInfo({...billingInfo, loading: true});

    try {
      const {
        plan,
        monthlyPrice,
        card,
        subscription_status,
        next_payment_attempt
      } = await getCollectionBillingInfo(collection.id);
      setBillingInfo({plan, monthlyPrice, card, loading: false, subscription_status, next_payment_attempt})
    } catch (e) {
      console.log("updateBillingInfo | error: ", e)
      setBillingInfo({...billingInfo, loading: false})
    }
  }

  const updateCollectionAdminUsers = async () => {
    if (!collection) {
      return
    }
    try {
      const {users} = await getCollectionAdmins(collection.id);
      setAdminUsers(users)
    } catch (e) {
      console.log("updateAdminUsers | error: ", e)
    }
  }

  const updateInvoiceData = async () => {
    if (!collection) {
      return
    }
    try {
      const {invoices: data} = await getInvoices(collection.id);
      setInvoices(data);
    } catch (e) {
      console.log("updateCampaignsData | error: ", e)
    }
  }

  return (
    <AdminCollectionContext.Provider value={{
      collection,
      campaigns,
      billingInfo,
      adminUsers,
      invoices,
      openBillingModal,
      openPaymentCheckoutModal,
      collectionLoading,
      updateCollectionData,
      updateCampaignsData,
      updateBillingInfo,
      updateCollectionAdminUsers,
      updateInvoiceData,
      setOpenBillingModal,
      setOpenPaymentCheckoutModal,
    }}>
      {props.children}
    </AdminCollectionContext.Provider>
  )
}

export default AdminCollectionContextProvider;
