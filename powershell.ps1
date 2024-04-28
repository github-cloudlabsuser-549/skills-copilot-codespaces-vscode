# Install the AZ PowerShell module if not already installed
if (-not (Get-Module -Name Az -ListAvailable)) {
    Install-Module -Name Az -AllowClobber -Force
}

#Authinticate
Connect-AzAccount

# Define parameters
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageaccount"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
    -Name $storageAccountName `
    -Location $location `
    -SkuName "Standard_LRS" # LRS = Locally redundant storage