package factions

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/dustin-ward/space-traders/internal/util"
)

type Faction struct {
	Symbol       string `json:"symbol"`
	Name         string `json:"name"`
	Description  string `json:"description"`
	Headquarters string `json:"headquarters"`
	// TODO: Implement traits
	// Traits []Traits
	IsRecruiting bool `json:"isRecruiting"`
}

func GetFactions() ([]Faction, error) {
	factions := make([]Faction, 0)

	// TODO: Deal with pagination when #factions > 20
	resp, err := http.Get(util.API_LINK + "/factions?limit=20")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var data any
	err = json.Unmarshal(body, &data)
	if err != nil {
		return nil, err
	}

	data_arr := data.(map[string]any)["data"].([]any)
	for _, f := range data_arr {
		faction := f.(map[string]any)
		factions = append(factions, Faction{
			Symbol:       faction["symbol"].(string),
			Name:         faction["name"].(string),
			Description:  faction["description"].(string),
			Headquarters: faction["headquarters"].(string),
			IsRecruiting: faction["isRecruiting"].(bool),
		})
	}

	return factions, nil
}

func GetFaction(symbol string) (Faction, error) {
	var faction Faction

	resp, err := http.Get(util.API_LINK + "/factions/" + symbol)
	if err != nil {
		return faction, err
	}
	defer resp.Body.Close()
	
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return faction, err
	}

	// Disgusting generic type conversion...
	// Please tell me how to do this better
	var resp_json any
	if err = json.Unmarshal(body, &resp_json); err != nil {
		return faction, err
	}
	data, ok := resp_json.(map[string]any)["data"]
	if !ok {
		return faction, fmt.Errorf("error casting json")
	}
	re_json, err := json.Marshal(data)
	if err != nil {
		return faction, err
	}
	if err = json.Unmarshal(re_json, &faction); err != nil {
		return faction, nil
	}

	return faction, nil
}
