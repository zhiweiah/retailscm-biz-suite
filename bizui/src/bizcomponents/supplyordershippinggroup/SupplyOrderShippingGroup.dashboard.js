

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './SupplyOrderShippingGroup.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'
import appLocaleName from '../../common/Locale.tool'

const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,defaultRenderAnalytics,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers,defaultQuickFunctions
}= DashboardTool





const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(supplyOrderShippingGroup)=>{return [
	 ]}

const internalImageListOf = (supplyOrderShippingGroup) =>defaultImageListOf(supplyOrderShippingGroup,imageList)

const optionList =(supplyOrderShippingGroup)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalSettingListOf = (supplyOrderShippingGroup) =>defaultSettingListOf(supplyOrderShippingGroup, optionList)
const internalLargeTextOf = (supplyOrderShippingGroup) =>{

	return null
	

}


const internalRenderExtraHeader = defaultRenderExtraHeader

const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf


const internalRenderTitle = (cardsData,targetComponent) =>{
  
  
  const linkComp=cardsData.returnURL?<Link to={cardsData.returnURL}> <FontAwesome name="arrow-left"  /> </Link>:null
  return (<div>{linkComp}{cardsData.cardsName}: {cardsData.displayName}</div>)

}


const internalSummaryOf = (supplyOrderShippingGroup,targetComponent) =>{
	
	
	const {SupplyOrderShippingGroupService} = GlobalComponents
	const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{supplyOrderShippingGroup.id}</Description> 
<Description term="名称">{supplyOrderShippingGroup.name}</Description> 
<Description term="订单">{supplyOrderShippingGroup.bizOrder==null?appLocaleName(userContext,"NotAssigned"):`${supplyOrderShippingGroup.bizOrder.displayName}(${supplyOrderShippingGroup.bizOrder.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"订单","supplyOrder",SupplyOrderShippingGroupService.requestCandidateBizOrder,
	      SupplyOrderShippingGroupService.transferToAnotherBizOrder,"anotherBizOrderId",supplyOrderShippingGroup.bizOrder?supplyOrderShippingGroup.bizOrder.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="金额">{supplyOrderShippingGroup.amount}</Description> 
	
        {buildTransferModal(supplyOrderShippingGroup,targetComponent)}
      </DescriptionList>
	)

}

const internalQuickFunctions = defaultQuickFunctions

class SupplyOrderShippingGroupDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'supplyOrderShippingGroup'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.supplyOrderShippingGroup
    if(!this.props.supplyOrderShippingGroup.class){
      return null
    }
    const returnURL = this.props.returnURL
    
    const cardsData = {cardsName:"供应订单送货分组",cardsFor: "supplyOrderShippingGroup",
    	cardsSource: this.props.supplyOrderShippingGroup,returnURL,displayName,
  		subItems: [
    
      	],
  	};
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderTitle = this.props.renderTitle || internalRenderTitle
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    const renderAnalytics = this.props.renderAnalytics || defaultRenderAnalytics
    const quickFunctions = this.props.quickFunctions || internalQuickFunctions
    return (

      <PageHeaderLayout
        title={renderTitle(cardsData,this)}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
       
        {renderExtraHeader(cardsData.cardsSource)}
        {quickFunctions(cardsData)} 
        {renderAnalytics(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}        
        {largeTextOf(cardsData.cardsSource)}
        {renderExtraFooter(cardsData.cardsSource)}
  
      </PageHeaderLayout>
    
    )
  }
}

export default connect(state => ({
  supplyOrderShippingGroup: state._supplyOrderShippingGroup,
  returnURL: state.breadcrumb.returnURL,
  
}))(Form.create()(SupplyOrderShippingGroupDashboard))

