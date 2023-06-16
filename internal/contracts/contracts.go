package contracts

import (
	"encoding/json"
	"log"

	"github.com/dustin-ward/space-traders/internal/util"
)

type Contract struct {
	Id               string `json:"id"`
	Faction          string `json:"factionSymbol"`
	Type             string `json:"type"`
	Terms            terms  `json:"terms"`
	Accepted         bool   `json:"accepted"`
	Fulfilled        bool   `json:"fulfilled"`
	Expiration       string `json:"expiration"`
	DeadlineToAccept string `json:"deadlineToAccept"`
}

type terms struct {
	Deadline string  `json:"deadline"`
	Payment  payment `json:"payment"`
	Deliver  []deliver `json:"deliver"`
}

type payment struct {
	OnAccepted  int `json:"onAccepted"`
	OnFulfilled int `json:"onFulfilled"`
}

type deliver struct {
	TradeSymbol       string `json:"tradeSymbol"`
	DestinationSymbol string `json:"destinationSymbol"`
	UnitsRequired     int    `json:"unitsRequired"`
	UnitsFulfilled    int    `json:"unitsFulfilled"`
}

func GetContracts(token string) ([]Contract, error) {
	contracts := make([]Contract, 0)

	// TODO: Deal with pagination when #contracts > 20
	body, err := util.GetRequest("/my/contracts?limit=20", token)
	if err != nil {
		log.Println("GetContracts:", err)
		return []Contract{}, err
	}

	var data any
	err = json.Unmarshal(body, &data)
	if err != nil {
		log.Println("GetContracts:", err)
		return nil, err
	}

	data_arr := data.(map[string]any)["data"].([]any)
	for _, c := range data_arr {
		contract_bytes, err := json.Marshal(c)
		if err != nil {
			log.Println("GetContracts:", err)
			return nil, err
		}
		
		var contract Contract
		if err = json.Unmarshal(contract_bytes, &contract); err != nil {
			log.Println("GetContracts:", err)
			return nil, err
		}
		contracts = append(contracts, contract)
	}

	return contracts, nil
}
