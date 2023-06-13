package factions

import (
	"net/http"
	"io"
	"encoding/json"

	"github.com/dustin-ward/space-traders/internal/app"
)

type Faction struct {
	Symbol string `json:"symbol"`
	Name string	`json:"name"`
	Description string `json:"description"`
	Headquarters string	`json:"headquarters"`
	// TODO: Implement traits
	// Traits []Traits
	IsRecruiting bool `json:"isRecruiting"`
}
func (a *app.App) GetFactions() ([]Faction, error) {
	factions := make([]Faction,0)
	
	// TODO: Deal with pagination when #factions > 20
	resp, err := http.Get(app.API_LINK + "/factions?limit=20")
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
			Symbol: faction["symbol"].(string),
			Name: faction["name"].(string),
			Description: faction["description"].(string),
			Headquarters: faction["headquarters"].(string),
			IsRecruiting: faction["isRecruiting"].(bool),
		})
	}

	return factions, nil
}
